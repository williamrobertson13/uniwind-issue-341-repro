import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1230 } from '../generated/copy/copy1230';
import { layout1230 } from '../generated/layouts/layout1230';
import { palette1230 } from '../generated/palettes/palette1230';

const RuntimeView1230 = withUniwind(View);

export function Screen1230() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1230 styleClassName={layout1230.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1230.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1230.detail} / {palette1230.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
