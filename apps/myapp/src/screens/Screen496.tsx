import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy496 } from '../generated/copy/copy496';
import { layout496 } from '../generated/layouts/layout496';
import { palette496 } from '../generated/palettes/palette496';

const RuntimeView496 = withUniwind(View);

export function Screen496() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView496 styleClassName={layout496.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy496.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy496.detail} / {palette496.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
