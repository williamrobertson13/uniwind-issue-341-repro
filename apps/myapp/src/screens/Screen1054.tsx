import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1054 } from '../generated/copy/copy1054';
import { layout1054 } from '../generated/layouts/layout1054';
import { palette1054 } from '../generated/palettes/palette1054';

const RuntimeView1054 = withUniwind(View);

export function Screen1054() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1054 styleClassName={layout1054.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1054.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1054.detail} / {palette1054.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
