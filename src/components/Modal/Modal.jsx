import { useEffect } from 'react';
import css from './Modal.module.css';

export function Modal({ onCloseModal, image }) {
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onCloseModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

// export class Modal extends Component {
//   static propTypes = {
//     onCloseModal: PropTypes.func.isRequired,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyPress);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyPress);
//   }

//   handleKeyPress = e => {
//     if (e.key === 'Escape') {
//       this.props.onCloseModal();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onCloseModal();
//     }
//   };
//   render() {
//     return (
//       <div className={css.overlay} onClick={this.handleBackdropClick}>
//         <div className={css.modal}>
//           <img src={this.props.image} alt="" />
//         </div>
//       </div>
//     );
//   }
// }
