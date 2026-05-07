import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1278 } from '../generated/copy/copy1278';
import { layout1278 } from '../generated/layouts/layout1278';
import { palette1278 } from '../generated/palettes/palette1278';

const RuntimeView1278 = withUniwind(View);

export function Screen1278() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1278 styleClassName={layout1278.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1278.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1278.detail} / {palette1278.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
