import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1064 } from '../generated/copy/copy1064';
import { layout1064 } from '../generated/layouts/layout1064';
import { palette1064 } from '../generated/palettes/palette1064';

const RuntimeView1064 = withUniwind(View);

export function Screen1064() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1064 styleClassName={layout1064.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1064.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1064.detail} / {palette1064.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
