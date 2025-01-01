import { useProjects } from '../services/projects';

const Projects = () => {
  const { data, isLoading, error } = useProjects();

  if (isLoading) return <div>Carregando...</div>;
  if (error instanceof Error) return <div>Erro: {error.message}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold">Meus Projetos</h2>
      <ul>
        {data?.map((project: { name: string; description: string }) => (
          <li key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
