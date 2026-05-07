import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1096 } from '../generated/copy/copy1096';
import { layout1096 } from '../generated/layouts/layout1096';
import { palette1096 } from '../generated/palettes/palette1096';

const RuntimeView1096 = withUniwind(View);

export function Screen1096() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView1096 styleClassName={layout1096.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1096.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1096.detail} / {palette1096.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
