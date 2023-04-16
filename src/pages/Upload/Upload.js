import uploadPreview from '../../assets/images/Upload-video-preview.jpg';
import '../../pages/Upload/Upload.scss'
import { Link } from 'react-router-dom';

function Upload() {
    return (
        <>
        <div className='upload-wrapper'>
            <div className='upload'>
                <h1 className='upload__heading'>Upload Video</h1>
                <p className='upload-label__img'>VIDEO THUMBNAIL</p>
                <img className='upload__img' src={uploadPreview}></img>
                <form className='upload-form'>
                    <label for='title' className='upload-label__title'>TITLE YOUR VIDEO</label>
                    <textarea placeholder='Add a title to your video' name='title' className='upload-form__title'></textarea>
                    <label for='desc' className='upload-label__desc'>ADD A VIDEO DESCRIPTION</label>
                    <textarea placeholder='Add a description to your video' name='desc' className='upload-form__desc'></textarea>
                </form>
                <div className='upload-buttons'>
                    <Link to={'/'}><button className='upload-buttons__publish'>PUBLISH</button></Link>
                    <button className='upload-buttons__cancel'>CANCEL</button> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Upload;