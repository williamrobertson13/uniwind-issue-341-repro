import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy416 } from '../generated/copy/copy416';
import { layout416 } from '../generated/layouts/layout416';
import { palette416 } from '../generated/palettes/palette416';

const RuntimeView416 = withUniwind(View);

export function Screen416() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView416 styleClassName={layout416.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy416.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy416.detail} / {palette416.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
