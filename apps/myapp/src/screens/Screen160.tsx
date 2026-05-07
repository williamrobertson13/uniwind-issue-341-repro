import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy160 } from '../generated/copy/copy160';
import { layout160 } from '../generated/layouts/layout160';
import { palette160 } from '../generated/palettes/palette160';

const RuntimeView160 = withUniwind(View);

export function Screen160() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView160 styleClassName={layout160.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy160.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy160.detail} / {palette160.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
