import './App.css';
import axios from 'axios';
import {useEffect, useState, createContext} from "react";
import {Box, Paper, Table, TableContainer, TableHead, TableRow} from "@mui/material";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {styled} from "@mui/material/styles";
import BasicCard from "./basicCard";
import BasicCarousel from "./basicCarousel";
import BasicAchievement from "./basicAchievements";
import BasicTable from "./basicTable";

export const FirstAchievementsContext = createContext('');
export const SecondAchievementsContext = createContext('');
export const ThirdAchievementsContext = createContext('');

const API_ACTIVITY = 'https://www.boredapi.com/api/activity/';

const FreshIdeas = (number) => {
    const [freshIdeas, setFreshIdeas] = useState([]);
    const addFreshIdeas = (newIdea) => setFreshIdeas(oldIdeas => [...oldIdeas, newIdea]);

    useEffect(() => {
        for (let i = 0; i < number; i++) {
            axios.get(API_ACTIVITY).then((resp) => {
                addFreshIdeas(resp.data)
            });
        }
    }, [number]);

    return {freshIdeas, setFreshIdeas};
}

const FirstBlockCarousel = (number) => {
    const [firstCardsCarousel, setFirstCardsCarousel] = useState([]);
    const addCards = (newCard) => setFirstCardsCarousel(oldCards => [...oldCards, newCard]);

    useEffect(() => {
        for (let i = 0; i < number; i++) {
            axios.get(API_ACTIVITY).then((resp) => {
                addCards(resp.data)
            });
        }
    }, [number]);

    return {firstCardsCarousel, setFirstCardsCarousel};
}

const SecondBlockCarousel = () => {
    const [secondCardsCarousel, setSecondCardsCarousel] = useState([]);
    const addNewCards = (newCard) => setSecondCardsCarousel(oldCards => [...oldCards, newCard]);

    useEffect(() => {
        axios.get(API_ACTIVITY).then((resp) => {
            addNewCards(resp.data)
        });
    }, []);

    return {secondCardsCarousel, setSecondCardsCarousel};
}

const FirstBlockAchievements = (number) => {
    const [firstAchievements, setFirstAchievements] = useState([] || '');
    const addAchievements = (newAchievement) =>
        setFirstAchievements(oldAchievements => [...oldAchievements, newAchievement]);

    useEffect(() => {
        for (let i = 0; i < number; i++) {
            axios.get(API_ACTIVITY).then((resp) => {
                addAchievements(resp.data)
            });
        }
    }, [number]);

    return {firstAchievements, setFirstAchievements};
}

const SecondBlockAchievements = () => {
    const [secondAchievements, setSecondAchievements] = useState([] || '');
    const addAchievements = (newAchievement) =>
        setSecondAchievements(oldAchievements => [...oldAchievements, newAchievement]);

    useEffect(() => {
        axios.get(API_ACTIVITY).then((resp) => {
            addAchievements(resp.data)
        });
    }, []);

    return {secondAchievements, setSecondAchievements};
}

const ThirdBlockAchievements = () => {
    const [thirdAchievements, setThirdAchievements] = useState([] || '');
    const addAchievements = (newIdea) => setThirdAchievements([newIdea]);

    useEffect(() => {
        axios.get(API_ACTIVITY).then((resp) => {
            addAchievements(resp.data)
        });
    }, []);

    return {thirdAchievements, setThirdAchievements};
}

const CompletedChallenges = (number) => {
    const [challenges, setChallenges] = useState([]);
    const addChallenges = (newChallenge) => setChallenges(oldChallenges => [...oldChallenges, newChallenge]);

    useEffect(() => {
        for (let i = 0; i < number; i++) {
            axios.get(API_ACTIVITY).then((resp) => {
                addChallenges(resp.data)
            });
        }
    }, [number]);

    return {challenges, setChallenges};
}

function App() {
    const {freshIdeas, setFreshIdeas} = FreshIdeas(4);
    const {firstCardsCarousel, setFirstCardsCarousel} = FirstBlockCarousel(2);
    const {secondCardsCarousel, setSecondCardsCarousel} = SecondBlockCarousel();
    const {firstAchievements, setFirstAchievements} = FirstBlockAchievements(3);
    const {secondAchievements, setSecondAchievements} = SecondBlockAchievements();
    const {thirdAchievements} = ThirdBlockAchievements();
    const {challenges, setChallenges} = CompletedChallenges(3);

    localStorage.setItem("freshIdeas", JSON.stringify(freshIdeas))
    localStorage.setItem("firstCardsCarousel", JSON.stringify(firstCardsCarousel))
    localStorage.setItem("secondCardsCarousel", JSON.stringify(secondCardsCarousel))
    localStorage.setItem("firstAchievements", JSON.stringify(firstAchievements))
    localStorage.setItem("secondAchievements", JSON.stringify(secondAchievements))
    localStorage.setItem("thirdAchievements", JSON.stringify(thirdAchievements))
    localStorage.setItem("completedChallenges", JSON.stringify(challenges))

    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            fontSize: 16,
            fontWeight: 700,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 16,
            fontWeight: 700,
        },
    }));

    return (
        <FirstAchievementsContext.Provider value={firstAchievements}>
            <SecondAchievementsContext.Provider value={secondAchievements}>
                <ThirdAchievementsContext.Provider value={thirdAchievements}>
                    <Box sx={{height: 1580, backgroundColor: '#dfdddd'}}
                         className="App">
                        <Box sx={{height: 200, marginTop: 4.4}} className="fresh-ideas">
                            <h2>Choose fresh ideas to do</h2>
                            <Box sx={{height: 135}} className='fresh-ideas__block-cards'>
                                <>
                                    {freshIdeas.map(card => {
                                        return (
                                            <BasicCard activity={card.activity}
                                                       type={card.type}
                                                       key={card.key}
                                                       secondCardsCarousel={secondCardsCarousel}
                                                       setSecondCardsCarousel={setSecondCardsCarousel}
                                                       freshIdeas={freshIdeas}
                                                       setFreshIdeas={setFreshIdeas}
                                                       card={card}
                                            />
                                        );
                                    })}
                                </>
                            </Box>
                        </Box>
                        <Box sx={{height: 220}} className="ideas">
                            <h2 className='ideas__title'>Ideas in my list</h2>
                            <Box>
                                <BasicCarousel
                                    firstCardsCarousel={firstCardsCarousel}
                                    setFirstCardsCarousel={setFirstCardsCarousel}
                                    secondCardsCarousel={secondCardsCarousel}
                                    setSecondCardsCarousel={setSecondCardsCarousel}
                                    firstAchievements={firstAchievements}
                                    setFirstAchievements={setFirstAchievements}
                                    secondAchievements={secondAchievements}
                                    setSecondAchievements={setSecondAchievements}
                                    challenges={challenges}
                                    setChallenges={setChallenges}
                                    card={secondCardsCarousel}
                                />
                            </Box>
                        </Box>
                        <Box sx={{marginTop: 9}} className='achievements'>
                            <h2 className='achievements__title'>Achievements</h2>
                            <BasicAchievement/>
                        </Box>
                        <Box sx={{width: 1400, height: 300}} className='challenges'>
                            <h2 className='challenges__title'>Completed challenges</h2>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align='center'>Title</StyledTableCell>
                                            <StyledTableCell align='center'>Type</StyledTableCell>
                                            <StyledTableCell align='right'>When</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <>
                                        {challenges.map(challenge => {
                                            return (
                                                <BasicTable type={challenge.type}
                                                            activity={challenge.activity}
                                                            key={challenge.key}
                                                />
                                            );
                                        })}
                                    </>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </ThirdAchievementsContext.Provider>
            </SecondAchievementsContext.Provider>
        </FirstAchievementsContext.Provider>
    );
}

export default App;