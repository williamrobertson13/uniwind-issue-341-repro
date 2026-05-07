import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy248 } from '../generated/copy/copy248';
import { layout248 } from '../generated/layouts/layout248';
import { palette248 } from '../generated/palettes/palette248';

const RuntimeView248 = withUniwind(View);

export function Screen248() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView248 styleClassName={layout248.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy248.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy248.detail} / {palette248.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
