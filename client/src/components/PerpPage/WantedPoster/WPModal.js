import React, { useState } from 'react'
import { Modal, Button, Image, Table } from 'react-bootstrap'

function WPModal(props) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                EVIDENCE: ITEM D - Video Footage
            </Button>

            <Modal

                size="lg"
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-900w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        CASE ID #: PAW123456 CLASSIFIED TOP SECRET
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body sytle={{ width: 800 }}>
                    <div>

                        {props.poster}
                    </div>

                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>

                    <Table variant="dark" >
                        {/* <tr>
                            <td colSpan={2}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/wLI0ISSPZ9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            </td>
                        </tr> */}
                        <tr>
                            <td colSpan={2}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/rD_Qe0JOW50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/B8ISzf2pryI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Image style={{ width: 560 }} src={"map.png"} />

                            </td>
                        </tr>
                        <tr>
                            <td>
                                {/* <Image src='B9S9pQ.gif' style={{ width: 300 }} wrapped ui={false} /> */}
                            </td>
                            <td>
                                {/* <Image src='LimitedFrankCollie-max-1mb.gif' style={{ width: 300 }} wrapped ui={false} /> */}
                            </td>
                        </tr>
                    </Table>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default WPModal