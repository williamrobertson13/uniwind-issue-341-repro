import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy399 } from '../generated/copy/copy399';
import { layout399 } from '../generated/layouts/layout399';
import { palette399 } from '../generated/palettes/palette399';

const RuntimeView399 = withUniwind(View);

export function Screen399() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView399 styleClassName={layout399.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy399.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy399.detail} / {palette399.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
