/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
/* istanbul ignore file */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './HomePage.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  media: {
    height: 140,
  },
};
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/anchor-is-valid */

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderDPCard = this.renderDPCard.bind(this);
  }

  renderDPCard(card) {
    const { classes } = this.props;
    return (
      <Grid className="grid-card" item xs={6} sm={3}>
        <Card className={classes.card}>
          <Link to={card.link} style={{ textDecoration: 'none' }}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={card.image}
                title={card.imageTitle}
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="div">
                  {card.title}
                </Typography>
                <Typography component="p">{card.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Link>
          <CardActions>
            <Button size="small" color="primary" href={card.link}>
              Example
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }

  render() {
    const simpleFactory = {
      title: 'Simple Factory',
      description: `Simple factory simply generates an instance for the client
      without exposing any instantiation logic to the client`,
      link: '/simple-factory',
      image:
        'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Factory',
    };

    const factoryMethod = {
      title: 'Factory Method',
      description: `Factory method provides a way to delegate the instantiation
      logic to child classes.`,
      link: '/factory-method',
      image:
        'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Factory Method',
    };

    const abstractFactory = {
      title: 'Abstract Factory',
      description: `A factory of factories; a factory that groups the individual
      but related/dependent factories together without specifying
      their concrete classes.`,
      link: '/abstract-factory',
      image:
        'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Abstract Factory',
    };

    const builder = {
      title: 'Builder',
      description: `Allows you to create different flavors of an object while
      avoiding constructor pollution. Useful when there could be
      several flavors of an object. Or when there are a lot of
      steps involved in creation of an object.`,
      link: '/builder',
      image:
        'https://images.pexels.com/photos/1251176/pexels-photo-1251176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Builder',
    };

    const prototype = {
      title: 'Prototype',
      description: `Create object based on an existing object through cloning.`,
      link: '/prototype',
      image:
        'https://images.pexels.com/photos/838423/pexels-photo-838423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Prototype',
    };

    const singleton = {
      title: 'Singleton',
      description: `Ensures that only one object of a particular class is ever created.`,
      link: '/singleton',
      image:
        'https://images.pexels.com/photos/934718/pexels-photo-934718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Singleton',
    };

    const adapter = {
      title: 'Adapter',
      description: `Adapter pattern lets you wrap an otherwise incompatible object
      in an adapter to make it compatible with another class.`,
      link: '/adapter',
      image:
        'https://images.pexels.com/photos/845239/pexels-photo-845239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Adapter',
    };

    const bridge = {
      title: 'Bridge',
      description: `Bridge pattern is about preferring composition
      over inheritance. Implementation details are pushed
      from a hierarchy to another object with a separate hierarchy.`,
      link: '/bridge',
      image:
        'https://images.pexels.com/photos/1191857/pexels-photo-1191857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Bridge',
    };

    const composite = {
      title: 'Composite',
      description: `Composite pattern lets clients treat the individual objects
      in a uniform manner.`,
      link: '/composite',
      image:
        'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Composite',
    };

    const decorator = {
      title: 'Decorator',
      description: `Decorator pattern lets you dynamically change the behavior
      of an object at run time by wrapping them in an object of a
      decorator class.`,
      link: '/decorator',
      image:
        'https://images.pexels.com/photos/353347/pexels-photo-353347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Decorative',
    };

    const facade = {
      title: 'Facade',
      description: `Facade pattern provides a simplified interface to a complex subsystem.`,
      link: '/facade',
      image:
        'https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Facade',
    };

    const flyweight = {
      title: 'Flyweight',
      description: `It is used to minimize memory usage or computational
      expenses by sharing as much as possible with similar
      objects.`,
      link: '/flyweight',
      image:
        'https://images.pexels.com/photos/1362537/pexels-photo-1362537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Flyweight',
    };

    const proxy = {
      title: 'Proxy',
      description: `Using the proxy pattern, a class represents the functionality of another class.`,
      link: '/proxy',
      image:
        'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Proxy',
    };

    const chainOfResp = {
      title: 'Chain of Responsibility',
      description: `It helps building a chain of objects. Request enters from one
      end and keeps going from object to object till it finds the
      suitable handler.`,
      link: '/chain-of-responsibility',
      image:
        'https://images.pexels.com/photos/119562/pexels-photo-119562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Chain of Responsibility',
    };

    const command = {
      title: 'Command',
      description: `Allows you to encapsulate actions in objects. The key idea
      behind this pattern is to provide the means to decouple client
      from receiver.`,
      link: '/command',
      image:
        'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Command',
    };

    const iterator = {
      title: 'Iterator',
      description: `It presents a way to access the elements of an object
      without exposing the underlying presentation.`,
      link: '/iterator',
      image:
        'https://images.pexels.com/photos/911/time-watch-hands-of-a-clock-clock-pointers.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350',
      imageTitle: 'Iterator',
    };

    const mediator = {
      title: 'Mediator',
      description: `Mediator pattern adds a third party object (called mediator)
      to control the interaction between two objects (called
      colleagues). It helps reduce the coupling between the classes
      communicating with each other. Because now they don't need to
      have the knowledge of each other's implementation.`,
      link: '/mediator',
      image:
        'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Mediator',
    };

    const memento = {
      title: 'Memento',
      description: `Memento pattern is about capturing and storing the current state 
      of an object in a manner that it can be restored later on in a 
      smooth manner.`,
      link: '/memento',
      image:
        'https://images.pexels.com/photos/15798/night-computer-hdd-hard-drive.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Memento',
    };

    const observer = {
      title: 'Observer',
      description: `Defines a dependency between objects so that whenever
      an object changes its state, all its dependents are notified.`,
      link: '/observer',
      image:
        'https://images.pexels.com/photos/237258/pexels-photo-237258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Observer',
    };

    const visitor = {
      title: 'Visitor',
      description: `Visitor pattern lets you add further operations to objects without having to modify them.`,
      link: '/visitor',
      image:
        'https://images.pexels.com/photos/2326/fashion-person-woman-taking-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Visitor',
    };

    const strategy = {
      title: 'Strategy',
      description: `Strategy pattern allows you to switch the algorithm or strategy based upon the situation.`,
      link: '/strategy',
      image:
        'https://images.pexels.com/photos/6229/marketing-board-strategy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Strategy',
    };

    const statePattern = {
      title: 'State',
      description: `It lets you change the behavior of a class when the state changes.`,
      link: '/state',
      image:
        'https://images.pexels.com/photos/345092/pexels-photo-345092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'State',
    };

    const templateMethod = {
      title: 'Template Method',
      description: `Template method defines the skeleton of how a certain algorithm could be performed, but defers the implementation of those steps to the children classes.`,
      link: '/template-method',
      image:
        'https://images.pexels.com/photos/9365/sea-nature-art-animals.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageTitle: 'Template Method',
    };

    return (
      <div>
        <div className="header">
          <FormattedMessage {...messages.header} />
        </div>
        <div className="instructions">
          Click on any of the cards to see the results of that pattern&#39;s
          implementation. It may not look like much, but inspect the code to see
          the magic!
        </div>
        <div className="subtitle">Creational</div>
        <Grid className="pattern-grid" container>
          {this.renderDPCard(simpleFactory)}
          {this.renderDPCard(factoryMethod)}
          {this.renderDPCard(abstractFactory)}
          {this.renderDPCard(builder)}
          {this.renderDPCard(prototype)}
          {this.renderDPCard(singleton)}
        </Grid>

        <div className="subtitle">Structural</div>
        <Grid className="pattern-grid" container>
          {this.renderDPCard(adapter)}
          {this.renderDPCard(bridge)}
          {this.renderDPCard(composite)}
          {this.renderDPCard(decorator)}
          {this.renderDPCard(facade)}
          {this.renderDPCard(flyweight)}
          {this.renderDPCard(proxy)}
          {this.renderDPCard(chainOfResp)}
        </Grid>

        <div className="subtitle">Behavioral</div>
        <Grid className="pattern-grid" container>
          {this.renderDPCard(command)}
          {this.renderDPCard(iterator)}
          {this.renderDPCard(mediator)}
          {this.renderDPCard(memento)}
          {this.renderDPCard(observer)}
          {this.renderDPCard(visitor)}
          {this.renderDPCard(strategy)}
          {this.renderDPCard(statePattern)}
          {this.renderDPCard(templateMethod)}
        </Grid>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
