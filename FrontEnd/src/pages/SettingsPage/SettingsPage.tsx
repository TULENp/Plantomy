import { useAppSelector } from '../../hooks/redux';
import { Settings } from './Settings';
import './SettingsPage.scss';

export function SettingsPage(): JSX.Element {

    const { user, isAuthorized, isLoading, error } = useAppSelector(state => state.UserReducer);

    return (
        <>
            {isLoading
                ?
                <h1>Загрузка...</h1>
                :
                <>
                    {error
                        ?
                        <h1>{error}</h1>
                        :
                        <>
                            {!isAuthorized
                                ?
                                <h1>Пожалуйста, авторизуйтесь</h1>
                                :
                                <>
                                    <Settings user={user} />
                                </>
                            }
                        </>
                    }
                </>
            }
        </>
    )
}
