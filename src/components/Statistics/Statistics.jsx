import PropTypes from 'prop-types';
import { StatisticsContainer,Title,StatList,Item,Percentage } from 'components/Statistics/Statistics.styled';

export const Statistics = ({title,stats}) => {
    return <StatisticsContainer>
  <Title>{title}</Title>
  <StatList> {stats.map (({id,label,percentage}) => <Item key={id}>
      <span>{label}</span>
      <Percentage>{percentage}%</Percentage>
    </Item>)}
    
  </StatList>
</StatisticsContainer>
}

Statistics.propTypes = {
    title:PropTypes.string, 
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}
