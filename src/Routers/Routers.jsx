import React, { Children, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeScreen } from '../components/screen/HomeScreen'
import { Login } from '../components/Login/Login'
import Cookies from 'js-cookie'
import { decodeToken } from "react-jwt";
import { NavSports } from '../components/Sports/NavSports'

import { OngoingUserMatches1 } from '../components/Sports/SoloGames/user/OngoingUserMatches1'
import { UpcomingUserMatches1 } from '../components/Sports/SoloGames/user/UpcomingUserMatches1'
import { PlayedUserMatches1 } from '../components/Sports/SoloGames/user/PlayedUserMatches1'
import { OngoingMatches1 } from '../components/Sports/SoloGames/coordinator/OngoingMatches1'
import { UpcomingMatches1 } from '../components/Sports/SoloGames/coordinator/UpcomingMatches1'

import { OngoingUserMatches2 } from '../components/Sports/TeamGames/user/OngoingUserMatches2'
import { UpcomingUserMatches2 } from '../components/Sports/TeamGames/user/UpcomingUserMatches2'
import { PlayedUserMatches2 } from '../components/Sports/TeamGames/user/PlayedUserMatches2'
import { OngoingMatches2 } from '../components/Sports/TeamGames/coordinator/OngoingMatches2'
import { UpcomingMatches2 } from '../components/Sports/TeamGames/coordinator/UpcomingMatches2'

import { OngoingMatches3 } from '../components/Sports/MixGames/coordinator/OngoingMatches3'
import { OngoingUserMatches3 } from '../components/Sports/MixGames/user/OngoingUserMatches3'
import { PlayedUserMatches3 } from '../components/Sports/MixGames/user/PlayedUserMatches3'
import { UpcomingMatches3 } from '../components/Sports/MixGames/coordinator/UpcomingMatches3'
import { UpcomingUserMatches3 } from '../components/Sports/MixGames/user/UpcomingUserMatches3'
import ImageUpload from '../components/fixture/uploadFixture'
import UserSprintAndPump from '../components/Sports/Athletics/UserSprintAndPump'
import { UnAuthorized } from '../components/UnAuthorized'
import { Schedule } from '../components/Schedule'


export const MainRouter = ({ Children }) => {
    const isCoordinator = (sport) => {
        const token = Cookies.get('token');
        if (token) {
            console.log("decoded token -> ", decodeToken(token))
            if (decodeToken(token).sport === sport) {
                return true;
            }
        }
    };
    const RoutesData = createBrowserRouter([
        {
            path: '',
            element: <HomeScreen />,
            errorElement: <div>Error 404</div>
        },
        {
            path: '/home',
            element: <HomeScreen />,
            errorElement: <div>Error 404</div>
        },
        {
            path: '/pumpandsprint',
            element: <NavSports sport={"pumpandsprint"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <UserSprintAndPump name={"pump"}/>,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/pointstable',
            element: <NavSports sport={"pointstable"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <UserSprintAndPump name={"ptable"}/>,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/schedule',
            element: <NavSports sport={"schedule"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <Schedule/>,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/100mrace',
            element: <NavSports sport={"100mrace"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <UserSprintAndPump name={"race"}/>,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/badminton',
            element: <NavSports sport={"badminton"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingUserMatches1 sport={"badminton"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'ongoing',
                    element: <OngoingUserMatches1 sport={"badminton"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'upcoming',
                    element: <UpcomingUserMatches1 sport={"badminton"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'played',
                    element: <PlayedUserMatches1 sport={"badminton"} />,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/cricket',
            element: <NavSports sport={"cricket"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingUserMatches3 sport={"cricket"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'ongoing',
                    element: <OngoingUserMatches3 sport={"cricket"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'upcoming',
                    element: <UpcomingUserMatches3 sport={"cricket"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'played',
                    element: <PlayedUserMatches3 sport={"cricket"} />,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/carrom',
            element: <NavSports sport={"carrom"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingUserMatches3 sport={"carrom"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'ongoing',
                    element: <OngoingUserMatches3 sport={"carrom"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'upcoming',
                    element: <UpcomingUserMatches3 sport={"carrom"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'played',
                    element: <PlayedUserMatches3 sport={"carrom"} />,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/chess',
            element: <NavSports sport={"chess"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingUserMatches3 sport={"chess"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'ongoing',
                    element: <OngoingUserMatches3 sport={"chess"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'upcoming',
                    element: <UpcomingUserMatches3 sport={"chess"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'played',
                    element: <PlayedUserMatches3 sport={"chess"} />,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/volleyball',
            element: <NavSports sport={"volleyball"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingUserMatches1 sport={"volleyball"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'ongoing',
                    element: <OngoingUserMatches1 sport={"volleyball"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'upcoming',
                    element: <UpcomingUserMatches1 sport={"volleyball"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'played',
                    element: <PlayedUserMatches1 sport={"volleyball"} />,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/football',
            element: <NavSports sport={"football"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingUserMatches2 sport={"football"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'ongoing',
                    element: <OngoingUserMatches2 sport={"football"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'upcoming',
                    element: <UpcomingUserMatches2 sport={"football"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'played',
                    element: <PlayedUserMatches2 sport={"football"} />,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/satoliya',
            element: <NavSports sport={"satoliya"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingUserMatches2 sport={"satoliya"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'ongoing',
                    element: <OngoingUserMatches2 sport={"satoliya"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'upcoming',
                    element: <UpcomingUserMatches2 sport={"satoliya"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'played',
                    element: <PlayedUserMatches2 sport={"satoliya"} />,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/khokho',
            element: <NavSports sport={"khokho"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingUserMatches2 sport={"khokho"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'ongoing',
                    element: <OngoingUserMatches2 sport={"khokho"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'upcoming',
                    element: <UpcomingUserMatches2 sport={"khokho"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'played',
                    element: <PlayedUserMatches2 sport={"khokho"} />,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/tabletennis',
            element: <NavSports sport={"tabletennis"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingUserMatches1 sport={"tabletennis"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'ongoing',
                    element: <OngoingUserMatches1 sport={"tabletennis"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'upcoming',
                    element: <UpcomingUserMatches1 sport={"tabletennis"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'played',
                    element: <PlayedUserMatches1 sport={"tabletennis"} />,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/kabaddi',
            element: <NavSports sport={"kabaddi"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingUserMatches2 sport={"kabaddi"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'ongoing',
                    element: <OngoingUserMatches2 sport={"kabaddi"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'upcoming',
                    element: <UpcomingUserMatches2 sport={"kabaddi"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'played',
                    element: <PlayedUserMatches2 sport={"kabaddi"} />,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/tugofwar',
            element: <NavSports sport={"tugofwar"} />,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingUserMatches1 sport={"tugofwar"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'ongoing',
                    element: <OngoingUserMatches1 sport={"tugofwar"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'upcoming',
                    element: <UpcomingUserMatches1 sport={"tugofwar"} />,
                    errorElement: <div>Error 404</div>
                },
                {
                    path: 'played',
                    element: <PlayedUserMatches1 sport={"tugofwar"} />,
                    errorElement: <div>Error 404</div>
                }
            ]
        },
        {
            path: '/coordinator',
            element: <Login />,
            errorElement: <div>Error 404</div>
        },
        {
            path: '/coordinator/badminton',
            element: isCoordinator("badminton") ? <NavSports sport={"badminton"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingMatches1 sport={"badminton"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/badminton/upcoming',
                    element: <UpcomingMatches1 sport={"badminton"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/badminton/ongoing',
                    element: <OngoingMatches1 sport={"badminton"} />,
                    errorElement: <div>Error 404</div>,
                }
            ]
        },
        {
            path: '/coordinator/pumpandsprint',
            element: isCoordinator("pumpandsprint") ? <NavSports sport={"pumpandsprint"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <ImageUpload/>,
                    errorElement: <div>Error 404</div>,
                }
            ]
        },
        {
            path: '/coordinator/schedule',
            element: isCoordinator("schedule") ? <NavSports sport={"schedule"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <ImageUpload/>,
                    errorElement: <div>Error 404</div>,
                }
            ]
        },
        {
            path: '/coordinator/100mrace',
            element: isCoordinator("100mrace") ? <NavSports sport={"100mrace"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <ImageUpload/>,
                    errorElement: <div>Error 404</div>,
                }
            ]
        },
        {
            path: '/coordinator/pointstable',
            element: isCoordinator("pointstable") ? <NavSports sport={"pointstable"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <ImageUpload/>,
                    errorElement: <div>Error 404</div>,
                }
            ]
        },
        {
            path: '/coordinator/carrom',
            element: isCoordinator("carrom") ? <NavSports sport={"carrom"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingMatches3 sport={"carrom"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/carrom/upcoming',
                    element: <UpcomingMatches3 sport={"carrom"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/carrom/ongoing',
                    element: <OngoingMatches3 sport={"carrom"} />,
                    errorElement: <div>Error 404</div>,
                }
            ]
        },
        {
            path: '/coordinator/chess',
            element: isCoordinator("chess") ? <NavSports sport={"chess"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingMatches3 sport={"chess"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/chess/upcoming',
                    element: <UpcomingMatches3 sport={"chess"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/chess/ongoing',
                    element: <OngoingMatches3 sport={"chess"} />,
                    errorElement: <div>Error 404</div>,
                }
            ]
        },
        {
            path: '/coordinator/cricket',
            element: isCoordinator("cricket") ? <NavSports sport={"cricket"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingMatches3 sport={"cricket"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/cricket/upcoming',
                    element: <UpcomingMatches3 sport={"cricket"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/cricket/ongoing',
                    element: <OngoingMatches3 sport={"cricket"} />,
                    errorElement: <div>Error 404</div>,
                }
            ]
        },
        {
            path: '/coordinator/tabletennis',
            element: isCoordinator("tabletennis") ? <NavSports sport={"tabletennis"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingMatches1 sport={"tabletennis"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/tabletennis/upcoming',
                    element: <UpcomingMatches1 sport={"tabletennis"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/tabletennis/ongoing',
                    element: <OngoingMatches1 sport={"tabletennis"} />,
                    errorElement: <div>Error 404</div>,
                }
            ]
        },
        {
            path: '/coordinator/tugofwar',
            element: isCoordinator("tugofwar") ? <NavSports sport={"tugofwar"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingMatches1 sport={"tugofwar"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/tugofwar/upcoming',
                    element: <UpcomingMatches1 sport={"tugofwar"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/tugofwar/ongoing',
                    element: <OngoingMatches1 sport={"tugofwar"} />,
                    errorElement: <div>Error 404</div>,
                }
            ]
        },
        {
            path: '/coordinator/volleyball',
            element: isCoordinator("volleyball") ? <NavSports sport={"volleyball"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingMatches1 sport={"volleyball"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/volleyball/upcoming',
                    element: <UpcomingMatches1 sport={"volleyball"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/volleyball/ongoing',
                    element: <OngoingMatches1 sport={"volleyball"} />,
                    errorElement: <div>Error 404</div>,
                }
            ]
        },
        {
            path: '/coordinator/satoliya',
            element: isCoordinator("satoliya") ? <NavSports sport={"satoliya"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingMatches2 sport={"satoliya"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/satoliya/upcoming',
                    element: <UpcomingMatches2 sport={"satoliya"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/satoliya/ongoing',
                    element: <OngoingMatches2 sport={"satoliya"} />,
                    errorElement: <div>Error 404</div>,
                }
            ]
        },
        {
            path: '/coordinator/kabaddi',
            element: isCoordinator("kabaddi") ? <NavSports sport={"kabaddi"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingMatches2 sport={"kabaddi"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/kabaddi/upcoming',
                    element: <UpcomingMatches2 sport={"kabaddi"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/kabaddi/ongoing',
                    element: <OngoingMatches2 sport={"kabaddi"} />,
                    errorElement: <div>Error 404</div>,
                }
            ]
        },
        {
            path: '/coordinator/football',
            element: isCoordinator("football") ? <NavSports sport={"football"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingMatches2 sport={"football"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/football/upcoming',
                    element: <UpcomingMatches2 sport={"football"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/football/ongoing',
                    element: <OngoingMatches2 sport={"football"} />,
                    errorElement: <div>Error 404</div>,
                }
            ]
        },
        {
            path: '/coordinator/khokho',
            element: isCoordinator("khokho") ? <NavSports sport={"khokho"} /> : <UnAuthorized/>,
            errorElement: <div>Error 404</div>,
            children: [
                {
                    path: '',
                    element: <OngoingMatches2 sport={"khokho"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/khokho/upcoming',
                    element: <UpcomingMatches2 sport={"khokho"} />,
                    errorElement: <div>Error 404</div>,
                },
                {
                    path: '/coordinator/khokho/ongoing',
                    element: <OngoingMatches2 sport={"khokho"} />,
                    errorElement: <div>Error 404</div>,
                }
            ]
        }
    ])
    return (
        <React.Fragment>
            <RouterProvider router={RoutesData}>{Children}</RouterProvider>
        </React.Fragment>
    )
}
