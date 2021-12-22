import css from './ProfileInfo.module.css';

export default function ProfileInfo(props) {
    return (
        <div>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
            </div>
            <div className={css.descriptionBlock}>
                avatar + description
            </div>
        </div>
    )
}