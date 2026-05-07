import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1051 } from '../generated/copy/copy1051';
import { layout1051 } from '../generated/layouts/layout1051';
import { palette1051 } from '../generated/palettes/palette1051';

const RuntimeView1051 = withUniwind(View);

export function Screen1051() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1051 styleClassName={layout1051.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1051.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1051.detail} / {palette1051.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
