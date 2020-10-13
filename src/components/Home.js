import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import fire from '../config/fire';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});
const url ="https://api.nasa.gov/planetary/apod?api_key=fbQGHiIcRk8Dn1lfPP1J2Aha4w7UpySxpqZpm7dq";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            response:[]
        };
        this.logout=this.logout.bind(this);
    }
    
    logout(){
        fire.auth().signOut();

    }
    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        response:result
                    })
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                }
            )
    }
    render(){
        const { classes } = this.props;
        var styles = {
            backgroundImage: `url(${this.state.response.hdurl})`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover'
        }
        return(
            <div>
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                                onClick={this.logout}
                                floated="right"
                            >
                                Log Out
                            </Button>

                        </Toolbar>
                    </AppBar>
                    
                </div>
                <div class="bottom" style={styles}>
                    
                </div>
            </div>
            
        )
    }
}
export default withStyles(useStyles)(Home);