import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1347 } from '../generated/copy/copy1347';
import { layout1347 } from '../generated/layouts/layout1347';
import { palette1347 } from '../generated/palettes/palette1347';

const RuntimeView1347 = withUniwind(View);

export function Screen1347() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1347 styleClassName={layout1347.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1347.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1347.detail} / {palette1347.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
