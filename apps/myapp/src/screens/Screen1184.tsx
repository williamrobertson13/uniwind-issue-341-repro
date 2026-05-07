import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1184 } from '../generated/copy/copy1184';
import { layout1184 } from '../generated/layouts/layout1184';
import { palette1184 } from '../generated/palettes/palette1184';

const RuntimeView1184 = withUniwind(View);

export function Screen1184() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1184 styleClassName={layout1184.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1184.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1184.detail} / {palette1184.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
