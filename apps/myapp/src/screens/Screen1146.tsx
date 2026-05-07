import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1146 } from '../generated/copy/copy1146';
import { layout1146 } from '../generated/layouts/layout1146';
import { palette1146 } from '../generated/palettes/palette1146';

const RuntimeView1146 = withUniwind(View);

export function Screen1146() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1146 styleClassName={layout1146.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1146.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1146.detail} / {palette1146.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
