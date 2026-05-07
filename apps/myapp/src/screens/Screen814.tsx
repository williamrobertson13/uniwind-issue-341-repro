import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy814 } from '../generated/copy/copy814';
import { layout814 } from '../generated/layouts/layout814';
import { palette814 } from '../generated/palettes/palette814';

const RuntimeView814 = withUniwind(View);

export function Screen814() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView814 styleClassName={layout814.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy814.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy814.detail} / {palette814.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
