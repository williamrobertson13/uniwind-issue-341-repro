import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy384 } from '../generated/copy/copy384';
import { layout384 } from '../generated/layouts/layout384';
import { palette384 } from '../generated/palettes/palette384';

const RuntimeView384 = withUniwind(View);

export function Screen384() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView384 styleClassName={layout384.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy384.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy384.detail} / {palette384.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
