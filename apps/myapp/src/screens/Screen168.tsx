import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy168 } from '../generated/copy/copy168';
import { layout168 } from '../generated/layouts/layout168';
import { palette168 } from '../generated/palettes/palette168';

const RuntimeView168 = withUniwind(View);

export function Screen168() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView168 styleClassName={layout168.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy168.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy168.detail} / {palette168.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
