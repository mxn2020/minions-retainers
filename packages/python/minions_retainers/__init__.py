"""
Minions Retainers Python SDK

Recurring service agreements, care plans, monthly retainers, and subscription management
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Retainers.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
