import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1214 } from '../generated/copy/copy1214';
import { layout1214 } from '../generated/layouts/layout1214';
import { palette1214 } from '../generated/palettes/palette1214';

const RuntimeView1214 = withUniwind(View);

export function Screen1214() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1214 styleClassName={layout1214.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1214.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1214.detail} / {palette1214.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
