<?php
/**
 * @author donknap
 * @date 19-12-16 上午10:56
 */

namespace W7\App\Middleware;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use W7\App\Exception\ErrorHttpException;
use W7\Core\Middleware\MiddlewareAbstract;

class CheckFounderMiddleware extends MiddlewareAbstract
{
	public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
	{
		$user = $request->getAttribute('user');
		if (!$user->isFounder) {
			throw new ErrorHttpException('只有创始人可以访问');
		}
		return parent::process($request, $handler);
	}
}