import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy641 } from '../generated/copy/copy641';
import { layout641 } from '../generated/layouts/layout641';
import { palette641 } from '../generated/palettes/palette641';

const RuntimeView641 = withUniwind(View);

export function Screen641() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView641 styleClassName={layout641.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy641.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy641.detail} / {palette641.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
