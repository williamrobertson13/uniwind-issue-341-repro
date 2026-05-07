import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1126 } from '../generated/copy/copy1126';
import { layout1126 } from '../generated/layouts/layout1126';
import { palette1126 } from '../generated/palettes/palette1126';

const RuntimeView1126 = withUniwind(View);

export function Screen1126() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1126 styleClassName={layout1126.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1126.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1126.detail} / {palette1126.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
