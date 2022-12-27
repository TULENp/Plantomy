import React, { useEffect, useState } from 'react'
import { GetUserInfo } from '../../store/reducers/ActionCreators';
import { TUser } from '../../types';

export function SettingsPage(): JSX.Element {

    const [userInfo, setUserInfo] = useState<TUser>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getInfo();
    }, [])

    async function getInfo() {
        // @ts-ignore
        const result: TUser = await GetUserInfo();

        setUserInfo(result);
        setIsLoading(false);
    }

    return (
        <>
            <h2>Настройки</h2>
            {isLoading
                ?
                <h1>Загрузка...</h1>
                :
                <>
                    {!userInfo
                        ?
                        <h1>Ошибка</h1>
                        :
                        <h1>{userInfo.fio}</h1>
                    }
                </>
            }
        </>
    )
}
