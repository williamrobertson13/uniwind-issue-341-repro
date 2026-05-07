import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1253 } from '../generated/copy/copy1253';
import { layout1253 } from '../generated/layouts/layout1253';
import { palette1253 } from '../generated/palettes/palette1253';

const RuntimeView1253 = withUniwind(View);

export function Screen1253() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1253 styleClassName={layout1253.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1253.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1253.detail} / {palette1253.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
