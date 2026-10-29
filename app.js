const examples = {
  rollback: {title: 'Return to a previous deployment revision.', text: 'Kubernetes tracks Deployment revisions. The rollout undo command can roll a Deployment back to its previous revision; inspect rollout history when you need to choose a specific revision. [1]', command: 'kubectl rollout undo deployment/<deployment-name>', source: 'Rolling back a Deployment', url: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment'},
  memory: {title: 'Start with the container’s memory limit.', text: 'A container that exceeds its memory limit can be terminated. The Kubernetes memory-resource task explains the OOMKilled state and demonstrates how memory limits and container restarts relate. Compare resource settings and observed usage as part of your investigation. [1]', command: 'kubectl describe pod <pod-name>', source: 'Assign memory resources to containers and Pods', url: 'https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/'},
  probes: {title: 'Detect when a container needs a restart.', text: 'A liveness probe helps Kubernetes determine when to restart a container. Readiness probes serve a different purpose: deciding whether a container is ready to accept traffic. Startup probes can protect slow-starting containers from premature liveness checks. [1]', command: null, source: 'Configure liveness, readiness and startup probes', url: 'https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/'}
};
function showExample(key) {
  const example = examples[key];
  document.getElementById('answer-title').textContent = example.title;
  document.getElementById('answer-text').textContent = example.text;
  const command = document.getElementById('answer-command');
  command.hidden = !example.command;
  command.textContent = example.command || '';
  const source = document.getElementById('source-link');
  source.textContent = '[1] ' + example.source + ' ↗';
  source.href = example.url;
  document.querySelectorAll('[data-example]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.example === key)));
}
document.querySelectorAll('[data-example]').forEach(button => button.addEventListener('click', () => showExample(button.dataset.example)));
showExample('rollback');
