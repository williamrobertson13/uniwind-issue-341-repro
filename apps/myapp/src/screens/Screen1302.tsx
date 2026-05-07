import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1302 } from '../generated/copy/copy1302';
import { layout1302 } from '../generated/layouts/layout1302';
import { palette1302 } from '../generated/palettes/palette1302';

const RuntimeView1302 = withUniwind(View);

export function Screen1302() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1302 styleClassName={layout1302.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1302.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1302.detail} / {palette1302.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
