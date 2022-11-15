import styles from '../styles/Home.module.css'
const decision = (props) => {
  return <h2 data-cy="title" className={styles.main}>You are a {props.pageSlug} lover</h2>;
};


export  function getServerSideProps(context) {
  const pageSlug = context.params?.slug

  return {
    props: {pageSlug:pageSlug}, // will be passed to the page component as props
  }
}



export default decision;
