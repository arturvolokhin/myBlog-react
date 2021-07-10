const UserTechStack = () => {
    const stack = ['html', 'css', 'js', 'react', 'webpack', 'git', 'npm'];
    return (
        <article className="user__stack">
            <h2 className="user__title">My technologies stack</h2>
            <ul className="user__stack-list">
                {
                    stack.map((item, index) => {
                        return(
                            <li className={'user__stack-item user__stack-item--' + item} key={index}/>
                        )
                    })    
                }
            </ul>
        </article>
    )
}

export default UserTechStack;