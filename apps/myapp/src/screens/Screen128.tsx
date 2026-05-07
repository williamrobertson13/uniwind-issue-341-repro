import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy128 } from '../generated/copy/copy128';
import { layout128 } from '../generated/layouts/layout128';
import { palette128 } from '../generated/palettes/palette128';

const RuntimeView128 = withUniwind(View);

export function Screen128() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView128 styleClassName={layout128.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy128.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy128.detail} / {palette128.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
