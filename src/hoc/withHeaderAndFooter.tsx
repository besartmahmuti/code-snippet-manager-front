
import Header from '../components/Header';
import Footer from '../components/Footer';


const withHeaderAndFooter = (WrappedComponent:React.ComponentType) => {
  return function WithHeaderAndFooter(props : any ) {
    return (
      <>
        <Header />
        <WrappedComponent {...props} />
        <Footer />
      </>
    );
  };
}

export default withHeaderAndFooter;