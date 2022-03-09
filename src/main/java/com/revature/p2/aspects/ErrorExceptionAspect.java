package com.revature.p2.aspects;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.revature.p2.exceptions.AuthenticationException;
import com.revature.p2.exceptions.InvalidRequestException;
import com.revature.p2.exceptions.ResourcePersistenceException;
import com.revature.p2.util.ErrorExceptionResponse;


@RestControllerAdvice
public class ErrorExceptionAspect {

	@ExceptionHandler
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	public ErrorExceptionResponse handleRuntimeException(RuntimeException e) {
		return new ErrorExceptionResponse(500, e);
	}
	
	@ExceptionHandler
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	public ErrorExceptionResponse handleException(Exception e) {
		return new ErrorExceptionResponse(500, e);
	}
	
	@ExceptionHandler(ResourcePersistenceException.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	public ErrorExceptionResponse handleResourcePersistanceException(RuntimeException e) {
		return new ErrorExceptionResponse(500, e);
	}
	
	@ExceptionHandler(InvalidRequestException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ErrorExceptionResponse handleInvalidRequestException(RuntimeException e) {
		return new ErrorExceptionResponse(400, e);
	}
	
	@ExceptionHandler(AuthenticationException.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	public ErrorExceptionResponse handleAuthenticationException(RuntimeException e) {
		return new ErrorExceptionResponse(401, e);
	}
}