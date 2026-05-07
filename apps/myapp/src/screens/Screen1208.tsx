import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1208 } from '../generated/copy/copy1208';
import { layout1208 } from '../generated/layouts/layout1208';
import { palette1208 } from '../generated/palettes/palette1208';

const RuntimeView1208 = withUniwind(View);

export function Screen1208() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1208 styleClassName={layout1208.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1208.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1208.detail} / {palette1208.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
