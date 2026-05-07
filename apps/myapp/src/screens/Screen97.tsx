import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy97 } from '../generated/copy/copy97';
import { layout97 } from '../generated/layouts/layout97';
import { palette97 } from '../generated/palettes/palette97';

const RuntimeView97 = withUniwind(View);

export function Screen97() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView97 styleClassName={layout97.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy97.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy97.detail} / {palette97.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
