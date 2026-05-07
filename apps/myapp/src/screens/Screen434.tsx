import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy434 } from '../generated/copy/copy434';
import { layout434 } from '../generated/layouts/layout434';
import { palette434 } from '../generated/palettes/palette434';

const RuntimeView434 = withUniwind(View);

export function Screen434() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView434 styleClassName={layout434.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy434.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy434.detail} / {palette434.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
