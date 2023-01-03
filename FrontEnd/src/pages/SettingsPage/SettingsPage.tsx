import { useAppSelector } from '../../hooks/redux';

export function SettingsPage(): JSX.Element {

    const { user, isAuthorized, isLoading, miniLoader, error } = useAppSelector(state => state.userReducer);

    return (
        <>
            <h2>Настройки</h2>
            {miniLoader && <h1>мини загрузка</h1>}
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
                                <h1>{user.fio}</h1>
                            }
                        </>
                    }
                </>
            }
        </>
    )
}
