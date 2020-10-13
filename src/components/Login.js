import React, { Component } from 'react';
import fire from '../config/fire';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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
});

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
        };
        this.login=this.login.bind(this);
        this.signup=this.signup.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(res=>{
            console.log(res);
        }
        ).catch(err=>{
            console.log(err);
        })
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        const { classes } = this.props;
        return(
            <div>
                {/* <form>
                    <label>Enter Email</label>
                    <input 
                    type="email"
                    id="email"
                    name="email" 
                    onChange={this.handleChange} 
                    placeholder="Email"
                    value={this.setState.email}/>
                    <label>Enter Password</label>
                    <input
                    type="password" 
                    id="password"
                    name="password"
                    onChange={this.handleChange} 
                    placeholder="Password"
                    value={this.setState.password}/>
                    <button onClick={this.Auth}>Login</button>
                    
                </form> */}
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login or SignUp
        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                autoFocus
                                autoComplete="true"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <div>
<Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.login}
                            >
                                Login
                                
          </Button>
          <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.signup}
                            >
                                SignUp
                                
          </Button>
                            </div>
                            
                           
                        </form>
                    </div>
                </Container>
            </div>
        )

    }
}
export default withStyles(useStyles)(Login);