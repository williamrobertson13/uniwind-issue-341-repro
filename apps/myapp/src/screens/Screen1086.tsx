import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1086 } from '../generated/copy/copy1086';
import { layout1086 } from '../generated/layouts/layout1086';
import { palette1086 } from '../generated/palettes/palette1086';

const RuntimeView1086 = withUniwind(View);

export function Screen1086() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1086 styleClassName={layout1086.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1086.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1086.detail} / {palette1086.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
