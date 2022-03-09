import React, { useEffect, useState } from 'react'
import WantedPoster from './WantedPoster'
import { Container, Row, Col, Table, Image, Button, ButtonGroup, Spinner } from 'react-bootstrap'
import LeftLayout from './LeftLayout';
import RightLayout from './RightLayout';
import './PerpPage.css'
import WPModal from './WantedPoster/WPModal';
import SearchBar from './SearchBar/SearchBar';

function PerpPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [viewMode, setViewMode] = useState("table");
    const [acitveProfileRow, setActiveProfileRow] = useState(0)
    const [searchString, setSearchString] = useState("")
    const [filteredData, setFilteredData] = useState([])
    const [data, setData] = useState([]);
    async function fetchOffenders() {
        const response = await fetch("http://localhost:8083/p2/offender/getAllOffender");
        const fetchedOffenders = await response.json();
        console.log(fetchedOffenders);
        setIsLoading(false);
        setData(fetchedOffenders);
    }

    const seedData = [{
        "src": "images (a).png",
        "fullname": "Guilty",
        "alias": "Guilty",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "images (b).png",
        "fullname": "Bad Dog",
        "alias": "'Bad' the Dog",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "images (c).png",
        "fullname": "Douglas Dog",
        "alias": "'Doug' the Dog",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "images (5).png",
        "fullname": "NIKOLAI ONDREJKO",
        "alias": "DINGGLE BERRY BANDIT",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "images (3).png",
        "fullname": "Snoop Puppy Pup",
        "alias": "Calvin Cordozar Broadus Jr",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "images (4).png",
        "fullname": "Kim Bassethound",
        "alias": "DINGGLE BERRY BANDIT",
        "dob": "FEB 09, 2022",
        "sex": "F",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "images (10).png",
        "fullname": "ICE CUB",
        "alias": "DINGGLE BERRY BANDIT",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "images (11).png",
        "fullname": "Don Vito Corleone",
        "alias": "The Godfather",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "download (1).png",
        "fullname": "Natasha ONDREJKO",
        "alias": "DINGGLE BERRY BANDIT",
        "dob": "FEB 09, 2022",
        "sex": "F",
        "height": "1' 2\"",
        "weight": "50",
        "eyes": "BRN",
        "hair": "BRN"
    },

    {
        "src": "cat-with-attitude.png",
        "fullname": "Marty McMeow",
        "alias": "Michael J Cat",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "attitude-feat.png",
        "fullname": "NIKOLAI Cagged",
        "alias": "DINGGLE BERRY BANDIT",
        "dob": "FEB 09, 2022",
        "sex": "F",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "cat-4694065_960_720.png",
        "fullname": "Ted Tabby",
        "alias": "Ira Tay",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "quy3t9tjvia61.png",
        "fullname": "Clint Eastcat",
        "alias": "Sheriff",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "shutterstock_129390089_1.png",
        "fullname": "Norman Bats",
        "alias": "Psycho",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "grumpy_cat.png",
        "fullname": "Tartar Sauce",
        "alias": "Grumpy Cat",
        "dob": "FEB 09, 2022",
        "sex": "F",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "famous-cats1.png",
        "fullname": "Salvador Doggy",
        "alias": "Salvador Cat",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "Cat-Cosplaying-as-Dr-Strange.png",
        "fullname": "Doctor Strange Cat",
        "alias": "Doctor Cat",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "images (13).png",
        "fullname": "Captain Jack Sparrow",
        "alias": "Grumpy Cat",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "images (12).png",
        "fullname": "Audrey Hepcat",
        "alias": "Grumpy Cat",
        "dob": "FEB 09, 2022",
        "sex": "F",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },

    {
        "src": "images (14).png",
        "fullname": "Obi Wan Catnobi",
        "alias": "Grumpy Cat",
        "dob": "FEB 09, 2022",
        "sex": "M",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "cats-lede-1.png",
        "fullname": "Victoria",
        "alias": "the White",
        "dob": "FEB 09, 2022",
        "sex": "F",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    {
        "src": "insultdog.png",
        "fullname": "Triumph",
        "alias": "the Insult Comic Dog",
        "dob": "FEB 09, 2022",
        "sex": "F",
        "height": "2' 2\"",
        "weight": "BRN",
        "eyes": "BRN",
        "hair": "BRN"
    },
    ]

    const seedDB = async () => {
        for (let i = 0; i < seedData.length; i++) {
            const offenderObj = { ...seedData[i], orderBy: 100 + i };
            console.log(offenderObj)
            setTimeout(() => {
                fetch("http://localhost:8083/p2/offender/add", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(offenderObj)
                }).then(() => {
                    console.log("offender added")
                })
            }
                , i * 1000)
        }
    }
    useEffect(() => {
        // seedDB();
        fetchOffenders();
    }, []);

    async function deleteOffender(id) {
        const response = await fetch(`http://localhost:8083/p2/offender/delete/id?id=${id}`, {
          method: "DELETE",
        });
        console.log(`Deleting ${id}`);
        return response.json();
    }



    useEffect(() => {
        setFilteredData(data.filter(e => {
            return (e.fullname.toLowerCase().includes(searchString) || e.alias.toLowerCase().includes(searchString))
        }))
    }, [data])


    useEffect(() => {
        setFilteredData(data.filter(e => {
            return (e.fullname.toLowerCase().includes(searchString) || e.alias.toLowerCase().includes(searchString))
        }))
    }, [searchString])

    return isLoading ? <>
        <div className="center" style={{ height: '600px', textAlign: 'center', border: '3px' }}>
            <br/>
            <h1>Loading...</h1>
            <br/>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    </> : (

        <>
            <section style={{ textAlign: 'center', backgroundColor: 'black' }}>
                <ButtonGroup aria-label="Basic example">
                    <Button onClick={() => seedDB()}>Seed Database</Button>
                    {viewMode === 'profile' || viewMode === 'poster' ? (<><Button onClick={() => setViewMode('table')}>Table View</Button></>) : null}
                    {viewMode === 'profile' ? (<><Button onClick={() => setViewMode('poster')}>Poster View</Button></>) : null}
                    {viewMode === 'poster' ? (<><Button onClick={() => setViewMode('profile')}>Profile View</Button></>) : null}
                    {viewMode === 'profile' || viewMode === 'poster' ? (<><Button onClick={() => setActiveProfileRow(acitveProfileRow > 0 ? acitveProfileRow - 1 : 0)}>Previous</Button>
                        <Button onClick={() => setActiveProfileRow(acitveProfileRow < filteredData.length - 1 ? acitveProfileRow + 1 : filteredData.length - 1)}>Next</Button></>) : null}

                    {viewMode === 'table' ? (<SearchBar setSearchString={setSearchString} />) : null}
                </ButtonGroup>
            </section>
            {viewMode === 'table' ?
                (<Table >
                    <thead>
                        <tr>
                            {['src', 'fullname', 'alias', 'dob', 'sex', 'hair', 'eyes', 'Delete'].map((c, j) => {
                                return (<th key={`th-${j}`}>
                                    {c}
                                </th>)
                            })}

                        </tr>
                    </thead>
                    <tbody>
                        {filteredData && filteredData.map((e, i) => (<>
                            <tr>
                                {['src'].map((c, j) => {
                                    return (<Image onClick={() => {
                                        setViewMode('profile')
                                        setActiveProfileRow(i)

                                    }} style={{ height: '200px' }} src={e[c]} />)
                                })}
                                {['fullname', 'alias', 'dob', 'sex', 'hair', 'eyes'].map((c, j) => {
                                    return (<td key={`pm-${i}${j}`}>
                                        {e[c]}
                                    </td>)
                                })}
                                <td><Button variant="dark" onClick={() => deleteOffender(e.id)}>Delete</Button></td>
                            </tr>
                        </>
                        )
                        )}
                    </tbody>

                </Table>)
                : null}
            {/* <img src="sample11-a.png" style={{ "width": '100%' }} /> */}
            {viewMode === 'profile' ?
                (<Container className="perppageContainer" fluid>
                    {filteredData && filteredData.map((e, i) => i === acitveProfileRow ? (
                        <>
                            <Row key={`wpmr-${i}`}>
                                <Col>
                                    <LeftLayout key={`wpmll-${i}`} data={e} />

                                    <WPModal key={`wpm1-${i}`} />
                                </Col>
                                <Col>
                                    <RightLayout key={`wpmrl-${i}`} />
                                </Col>
                            </Row>
                            <br />
                        </>
                    ) : null)}

                </Container>) : null}
            {viewMode === 'poster' ?
                (<table>
                    {filteredData && filteredData.map((e, i) => i === acitveProfileRow ? (<>
                        <tr>
                            <td>
                                <WantedPoster data={e} />
                                {/* <WPModal poster={
                                <img src="sample11-a.png" style={{ "width": '100%' }} />} />
                            <WPModal poster={<img src="sample11.png" style={{ "width": '50%' }} />} /> */}
                            </td>
                        </tr>
                    </>
                    ) : null
                    )}

                </table>) : null}
        </>
    )
}

export default PerpPage