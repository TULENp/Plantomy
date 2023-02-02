import { LazyLoading } from '../../components/LazyLoading';
import { useAppSelector } from '../../hooks/redux';
import { Settings } from './Settings';
import './SettingsPage.scss';

export function SettingsPage(): JSX.Element {

    const { user, isAuthorized, isLoading, error } = useAppSelector(state => state.UserReducer);

    return (
        <>
            {isLoading
                ?
                <LazyLoading type='spin' />
                :
                <>
                    {error
                        ?
                        <h1>{error}</h1>
                        :
                        <>
                            {!isAuthorized
                                ?
                                <>
                                    <div className='not_login'>
                                        <div className='wrapper_not_login'>
                                            <h1>Пожалуйста, авторизируйтесь</h1>
                                            <img className='icon_login' width={40} src='/icon_login.png' alt='icon_login.png' />
                                        </div>
                                    </div>
                                </>
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
