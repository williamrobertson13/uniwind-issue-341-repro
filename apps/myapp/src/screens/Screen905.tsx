import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy905 } from '../generated/copy/copy905';
import { layout905 } from '../generated/layouts/layout905';
import { palette905 } from '../generated/palettes/palette905';

const RuntimeView905 = withUniwind(View);

export function Screen905() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView905 styleClassName={layout905.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy905.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy905.detail} / {palette905.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
