import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy872 } from '../generated/copy/copy872';
import { layout872 } from '../generated/layouts/layout872';
import { palette872 } from '../generated/palettes/palette872';

const RuntimeView872 = withUniwind(View);

export function Screen872() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView872 styleClassName={layout872.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy872.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy872.detail} / {palette872.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
