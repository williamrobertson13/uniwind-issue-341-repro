import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy358 } from '../generated/copy/copy358';
import { layout358 } from '../generated/layouts/layout358';
import { palette358 } from '../generated/palettes/palette358';

const RuntimeView358 = withUniwind(View);

export function Screen358() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView358 styleClassName={layout358.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy358.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy358.detail} / {palette358.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
