import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1285 } from '../generated/copy/copy1285';
import { layout1285 } from '../generated/layouts/layout1285';
import { palette1285 } from '../generated/palettes/palette1285';

const RuntimeView1285 = withUniwind(View);

export function Screen1285() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1285 styleClassName={layout1285.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1285.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1285.detail} / {palette1285.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
