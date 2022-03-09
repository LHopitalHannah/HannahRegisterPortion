package com.revature.p2.aspects;

import java.lang.reflect.Method;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.p2.exceptions.AuthenticationException;
import com.revature.p2.models.Deputy;
import com.revature.p2.util.SecureEndpoint;


@Aspect
@Component
public class AuthAspect {

	private HttpServletRequest request;

    @Autowired // will reset for each request
    public AuthAspect(HttpServletRequest request) {
        this.request = request;
    }


    @Around("@annotation(com.revature.p2.util.SecureEndpoint)")
    public Object secureEndpoints(ProceedingJoinPoint pjp) throws Throwable {

        Method method = ((MethodSignature) pjp.getSignature()).getMethod();
        SecureEndpoint anno = method.getAnnotation(SecureEndpoint.class);

        List<String> allowedUsers = Arrays.asList(anno.allowedUsers());
        HttpSession session = request.getSession(false);

        if (session == null) {
            throw new AuthenticationException("No session found.");
        }

        Deputy requestingUser = (Deputy) session.getAttribute("authUser");
        String username = requestingUser.getUsername();
        if (!allowedUsers.contains(username)) {
            throw new AuthenticationException("Forbidden request made to sensitive endpoint by user: " + username);
        }

        Object returned = pjp.proceed();

        System.out.println("Sensitive endpoint request serviced at " + LocalDateTime.now());

        return returned;
    }
	
}